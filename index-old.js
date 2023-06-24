//3 types of module in nodejs 1:builin module  2:custom module (user defined modules)  3:Third Party modules
//const filesys=require('fs')  import builtin module
//const filesys=require('./abc')  import Custom module



//diff bw lib and packages lib are not instalable and packages are instalable.  
// const data=require('./lib') //import custom module
// console.log(JSON.stringify(data))
// console.log("Hello world"+data.name)

//importing function
// const fun=require('./funimpo')
// fun()

//using builtin module
// const qs=require('querystring')
// const obj={
//     name:'gopi',
//     age:'23',
//     city:'pir'
// }

// console.log(`Stringified: ${qs.stringify(obj)}`)
// console.log(`Parsed: ${JSON.stringify(qs.parse('name=gopi&age=23&city=pir'))}`)

// console.log(qs.escape("Gaurav Lund"))


// const path=require('path')

// console.log(path.join('api','booking','getbooking'))
// console.log(path.normalize('api////bookings////getbooking/...'))

// console.log(process.argv [1])

const http=require('http')
const fs=require('fs')
const path=require('path')


const server=http.createServer((req,res)=>{
   
    const home=fs.readFileSync(path.resolve(path.join(__dirname,"pages","home.html")))
    const about=fs.readFileSync(path.resolve(path.join(__dirname,"pages","about.html")))
    const nf=fs.readFileSync(path.resolve(path.join(__dirname,"pages","notf.html")))



    console.log('Inside',req.url)
    if(req.url=='/home')
    {
        res.end('home')
    }
    else if(req.url=='/about')
    {
        res.end('about')
    } 
    else
    {
        res.end('nf')
    }

});

server.listen(3002,function(){
    console.log('server is lstning on port 3002')
})