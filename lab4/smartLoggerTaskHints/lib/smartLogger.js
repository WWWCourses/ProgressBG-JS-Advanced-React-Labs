/* ---------------------- do not change these functoins --------------------- */
function DevLogger(msg) {
	// log msg in console, while in dev env:
	console.log(`[dev log]: ${msg}`);
}

function ProdLogger(msg) {
	// do not log anything in console, while in prod env
	// in real app, this ProdLogger could send logs to some remote server, etc.
}
/* -------------------------------------------------------------------------- */

/* ---------------------------------- TASK ---------------------------------- */
// implement smartLogger object generator ("factory" or "construcor" => your coice)
// so that it will reuse DevLogger() and ProdLogger()
// your code here:



