// API route to get currently playing or recently played track
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

const getAccessToken = async () => {
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

    const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
    const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });

    return response.json();
};

export const GET = async () => {
    const { access_token } = await getAccessToken();

    // Try to get currently playing
    const nowPlayingResponse = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
        // Nothing playing, get recently played
        const recentlyPlayedResponse = await fetch(RECENTLY_PLAYED_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        const recentData = await recentlyPlayedResponse.json();
        const track = recentData.items[0]?.track;

        if (!track) {
            return Response.json({ isPlaying: false });
        }

        return Response.json({
            isPlaying: false,
            title: track.name,
            artist: track.artists.map((artist) => artist.name).join(', '),
            album: track.album.name,
            albumImageUrl: track.album.images[0]?.url,
            songUrl: track.external_urls.spotify,
        });
    }

    const song = await nowPlayingResponse.json();

    if (!song.item) {
        return Response.json({ isPlaying: false });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0]?.url;
    const songUrl = song.item.external_urls.spotify;

    return Response.json({
        isPlaying,
        title,
        artist,
        album,
        albumImageUrl,
        songUrl,
    });
};
