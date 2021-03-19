import {size, init} from '../../_common/js/common.js'
// import {frameEnd} from '../../_common/js/proline.js'



function start(){
	
	const tl = init()
	// return
	
	console.log(tl);
	
	
	tl.add(frameEnd())

}




function frameEnd(){
	const tl = new TimelineMax()

	tl.set(".frame2", {opacity:1})
	tl.from(".bg2", .2, {opacity:0})

	
	tl.from(".phone", .3, {y:size.h, opacity:1}, "+=.3")	
	tl.from(".ill", .3, {scale:0})

	// tl.from(".t2", .01, { opacity:0}, "+=.5")
	tl.from(".cta1", .2, {opacity:0}, "+=.25")
	

	return tl
}



start()

module.exports = {};

