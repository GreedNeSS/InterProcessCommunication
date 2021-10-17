'use strict';

const cluster = require('cluster');

if (cluster.isMaster) {
	console.log({ isMaster: cluster.isMaster });
	require('./master.js');
} else {
	console.log({ isWorker: cluster.isWorker });
	require('./worker.js');
}
