import {size, init} from './common.js'
import {frameEnd, trailingFX} from './proline.js'

function start(){
	
	const tl = init()
	// return
	
	const time = 1.3
	const X = 120
	const xy = {x:`-=${X}`, y:0}
	tl.from(".ball", .5, {x:"+=100", y:"-=33"}, 0)
	tl.from(".player2", time, {...xy}, 0)	
	trailingFX(time, {...xy, opacity:0})
	tl.from(".t1a", .1, {x:`-=${size.w}`,opacity:1}, .6)
	tl.from(".t1b", .01, {opacity:0}, "+=0")

	
	
	
	tl.add(frameEnd(), "+=1.6")

}

export {start}