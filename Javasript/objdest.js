//without destructuring

var course = {
	name: 'javascript',
	duration: '3 months',
	tutorial: 'geekforgeeks'
};

console.log(course.name)
console.log(course.duration)

//object destructuring

var {name,duration,tutorial} = course // here u need to use key as variable name
console.log(name)
console.log(duration)

var {name:cname,duration:dur,tutorial:tut} = course
console.log(cname)
console.log(dur)


//almost same as array destructuring