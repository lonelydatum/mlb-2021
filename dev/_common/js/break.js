import {size, init} from './common.js'
import {frameEnd, trailingFX} from './proline.js'

function start(){
	
	const tl = init()
	// return
	
	const time = 1
	const X = 150
	const ratio = 2/3
	const Y = ratio * size.h
	const xy = {x:`+=${X}`, y:`+=${Y}`}
	tl.from(".ball", time+.2, {...xy}, 0)
	
	trailingFX(time, {...xy, opacity:0})
	tl.from(".t1a", .20, {y:`+=${90}`,opacity:0}, .5)
	tl.from(".t1b", .01, {opacity:0}, "+=.2")

	
	
	
	tl.add(frameEnd(), "+=1.7")

}

export {start}