const PlaylistHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'playlists',
  version: '1.0.0',
  register: async (server, {
    playlistsService,
    songsService,
    activitiesService,
    validator,
  }) => {
    const playlistHandler = new PlaylistHandler(
      playlistsService,
      songsService,
      activitiesService,
      validator,
    );

    server.route(routes(playlistHandler));
  },
};
