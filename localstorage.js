let userList=[];
let getUserList;
let nameListDOM=document.querySelector("#nameList");

//localStorage.setItem("nameList",JSON.stringify(userList));

function Read(){
    nameListDOM.innerHTML="";
    getUserList=JSON.parse(localStorage.getItem("nameList"));
    if(getUserList!=null){
        if(getUserList.length===0){
            nameListDOM.innerHTML="Kullanıcı yok";
        }else{
           for (let index = 0; index < getUserList.length; index++) {
            nameListDOM.innerHTML+=`
            <div class="user-item">
                <p>
                    <i class=" fas fa-user"></i>
                    <span>User :</span>${getUserList[index]}
                </p>
                <div class="buttons">
                    <button class="primary" onclick="Edit(${index})">
                        <i class="fas fa-edit" ></i>
                        Edit
                    </button>
                    <button class="danger" onclick="Delete(${index})">
                        <i class="fas fa-trash" ></i>
                        Delete
                    </button>
                </div>
            </div>
            `;
            
           }
        }

    }
}

function Edit(item){
    let editUser=JSON.parse(localStorage.getItem("nameList"));
    nameListDOM.innerHTML="";
    for (let index = 0; index < editUser.length; index++) {
        if(index==item){
            nameListDOM.innerHTML+=`
            <div class="user-item">
                <div>
                <p>
                    <i class=" fas fa-user"></i>
                    <span>User :</span>İsim
                </p>
                <input type="text" id="newName" placeholder="${getUserList[index]}"/>
                </div>
                <div class="buttons">
                    <button class="success" onclick="Update(${index})">
                        <i class="fas fa-edit" ></i>
                        Update
                    </button>
                    <button class="warning" onclick="Read()">
                        <i class="fas fa-trash" ></i>
                        Cancel
                    </button>
                </div>
            `
        }
        
        
    }
}
newName=[];
function Update(indis) {
    let updateUser=JSON.parse(localStorage.getItem("nameList"));
    console.log(updateUser);
    updateUser[indis]=document.getElementById("newName").value;
    
    console.log(newName);
   localStorage.setItem("nameList",JSON.stringify(updateUser));
    Read();

}
function Create() {
    const storage=JSON.parse(localStorage.getItem("nameList"));
    let inputText=document.querySelector("#name").value;
    if(storage===null){
        userList.push(inputText);
        localStorage.setItem("nameList",JSON.stringify(userList));
    }
    else{
        userList=JSON.parse(localStorage.getItem("nameList"));
        userList.push(inputText);
        localStorage.setItem("nameList",JSON.stringify(userList));
    }
}

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    Create();
    Read();
    document.getElementById("form").reset();
})

function Delete(index){
    let deleteUser=JSON.parse(localStorage.getItem("nameList"));
    deleteUser.splice(index,1);
    localStorage.setItem("nameList",JSON.stringify(deleteUser));
   
    Read();
    }



document.addEventListener("DOMContentLoaded",()=>{
    Read();
})