const cron = require('node-cron')
const raffle = require('./controllers/raffle')
const { RAFFLE_CRON, RAFFLE_RUN } = process.env

//// task list
const task_raffle = cron.schedule(RAFFLE_CRON, async () => {
    try {
        await raffle().then(res => console.log(new Date(),`raffle`, res)).catch(e => { throw(e) })
    } catch (error) {
        console.log(`task_raffle_failed`, error)
    }
}, {
    scheduled: false
});


//// init
const run = async () => {
    try {
        if(RAFFLE_RUN == 1) task_raffle.start()
        else task_raffle.stop()
    } catch (error) {
        console.log(`run_error`, error)
    }
}

////////////////////
/// Run application
////////////////////
run();