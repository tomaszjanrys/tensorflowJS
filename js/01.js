async function scalar(){

    
    const tensorSc = tf.scalar(1.332)
    const dtypeTensor = tensorSc.dtype

    
    document.getElementById("scalar").innerHTML =" Tensor Scalar : "+ tensorSc + " Data Type :" + dtypeTensor +"Ranga  : "+ tensorSc.rank +" Ksztalt :"
                                                    + tensorSc.shape + ""+ "<hr>"
  
    
    
}

async function test(){

    
    const tensor1d = tf.tensor([1,2,3,4])
    const dtypeTensor = tensor1d.dtype
    
    document.getElementById("result").innerHTML =" Tensor 1d : "+ tensor1d + " Data Type :" + dtypeTensor +"Ranga  : "+ tensor1d.rank+" Ksztalt :"
    + tensor1d.shape + ""+ "<hr>"
  
    
    
}

async function test1(){

    
  
    const tensor2d = tf.tensor([[1,2,4,3],
                                [22,2,3,3]])
   
    document.getElementById("result1").innerHTML =" Tensor 2d : "+tensor2d +" Ksztalt :"
    + tensor2d.shape + ""+ "<hr>"
    
    
}
async function tensor3d(){

    
  
    const tensor3d = tf.tensor([[[1,2,3,13],
                                 [4,5,6,12*8],
                                 [7,8,9,10]]])
   
    document.getElementById("tensor3d").innerHTML =" Tensor 3d : "+tensor3d +" Ksztalt :"
    + tensor3d.shape + ""+ "<hr>"
    
    
}
async function test2(){

    
  
    const tensor6d = tf.tensor([[[[[[1,2,3],[4,5,6]]]]]])
   
    document.getElementById("result2").innerHTML =" Tensor 6d : "+tensor6d + " Rang :" + tensor6d.rank +" Ksztalt :"
    + tensor6d.shape + " " + "<br>shape[5] : numer axis = " + tensor6d.shape[5] + " " +"<hr>"
    
    
}
async function zeros(){

    
  
    const tensorZeros = tf.zeros([4])
    const tensorZeros1 = tf.zeros([4,1])
    const tensorZeros2 = tf.zeros([4,1,1])
   
    document.getElementById("zeros").innerHTML =" Zeros [4] : "+ tensorZeros+" "
    document.getElementById("zeros1").innerHTML =" Zeros [4,3]: "+ tensorZeros1 + " "
    document.getElementById("zeros2").innerHTML =" Zeros [4,2,3]: "+ tensorZeros2 + " " +"Ksztalt"+ tensorZeros2.shape 
    
    
}
async function tensorStr(){

    
  
    const tensorStr = tf.tensor1d(["marek"])
    const tensorStr2d = tf.tensor2d([["tom","imie"],["car","red"]])

    
   
    document.getElementById("tensorStr").innerHTML =" String :  "+ tensorStr+ " " +" <br>Ksztalt :"+ tensorStr.shape 
    document.getElementById("tensorStr2").innerHTML =" String  2d :  "+ tensorStr2d+ " " +" <br>Ksztalt :"+ tensorStr2d.shape + " <br> "
                                                   
    
    
}
async function buffer(){
    const buffer = tf.buffer([2,2])
    buffer.set(3,0,0)
    buffer.set(33,0,0)
   document.getElementById("buffer").innerHTML =" Bufer :  "+ buffer.toTensor()  +" <br>Ksztalt :"+ buffer.rank  
}
async function linespace(){
    const linspace = tf.linspace(1,5,6)
    
   document.getElementById("linespace").innerHTML =" linespace :  "+ linspace  +" <br>Ksztalt :"+ linspace.rank  
}
