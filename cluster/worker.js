'use strict';

const cluster = require('cluster');

console.log('Hello from worker', process.pid, cluster.worker.id);

const calculations = x => x * 2;

process.on('message', message => {
	console.log('Message to worker', process.pid);
	console.log(message);

	const result = message.task.map(calculations);
	process.send({ result });
});
