class Users{
    users =[]
    constructor (){
        let users = localStorage.getItem('users')
        if(users){
            this.users=  JSON.parse( users);
        }
        this.showAll(this.users);
    }
    showAll(users){
        users.forEach(u => {
            let tr = document.createElement('tr')
            tr.appendChild( this.createElement('td',[u.id]))
            tr.appendChild( this.createElement('td',[u.name]))
            tr.appendChild( this.createElement('td',[u.email]))
            tr.insertAdjacentHTML('beforeend',`
                <td user-id=${u.id}>
                    <button  class="btn btn-secondary btn-edit" data-bs-toggle="modal" data-bs-target="#form">Edit</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                </td>`,'td')
            document.querySelector('tbody').append(tr)
        });
    }
    createElement(tagName,innerData){
        let element = document.createElement(tagName)
            element.innerHTML = innerData;
        return element;
    }
    create(user){
        user['id']=new Date().getTime();
        this.users.push(user)
        this.save()
    }
    delete(id){
        this.users.splice(this.users.indexOf(this.users.find(e=>e.id==id)),1)
        this.save()
    }
    update(user){
        this.users[this.users.indexOf(this.users.find(e=>e.id==user.id))] =user;
        this.save()
    }
    save(){
        localStorage.setItem('users',JSON.stringify(this.users))
    }
}