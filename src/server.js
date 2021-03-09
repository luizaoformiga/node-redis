import 'dotenv/config';
import express from 'express';
import router from './routes/router';
import BullBoard from 'bull-board';
import Queue from './controller/lib/Queue';

const app = express();

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.use(router);
app.use('/admin/queues', BullBoard.UI);

app.listen(process.env.PORT, () => console.log(`Server running on the http://localhost:9008/users`));