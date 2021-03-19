import {size, init} from './common.js'
import {frameEnd, trailingFX} from './proline.js'

function start(){
	
	const tl = init()
	// return
	
	const time = 1
	const X = 150	
	const Y = 0
	
	const xy = {x:`+=${X}`, y:`+=${Y}`}
	
	console.log(xy);
	trailingFX(time, {...xy, opacity:0})
	tl.from(".t1a", .2, {x:`+=${250}`,opacity:0}, .6)
	tl.from(".t1b", .01, {opacity:0}, "+=.4")

	
	
	
	tl.add(frameEnd(), "+=1.7")

}

export {start}