class User //host user data as an object
{
    firstName;
    lastName;
    balance;
    customerID;

    constructor(fn,ln,bal,cxid)
    {
        this.firstName=fn;
        this.lastName=ln;
        this.balance=bal;
        this.customerID=cxid;
    }

    withdraw(amt){

        if(amt<=this.balance){
            this.balance-=amt;
            return `${this.firstName} your account have been debited $${amt} your balance is $${this.balance}`;
        }
        else{
            return `The account does not have $${amt}, please try another amount`;
        }
    }

    deposit(amt){
        this.balance+=parseFloat(amt);
        return `${this.firstName} you deposited $${amt} to your account, your new balance is $${this.balance}`; 
    }

}

//create fake db of users based on the class
const customers= [new User("Bruce","Wayne",4000000,"theboss"),
                  new User("Thanos","Badman",1000,"infinityStones"),
                  new User("Wonder","Woman",500000,"diana")];
    let userindex=0;//location of user in object array;

    function LookUpCx(cxInfo)
    {
    //id cx information that is sent is in class return true else return false
        
        for(let i=0;i<customers.length;i++)
        {
            if(cxInfo==customers[i].firstName)
            {
                userindex=i;
                return true;

            } 
            else{
                return false;
            }
        }
    }

    const customerInfo=document.querySelector("#customerId");
    const searchBtn=document.querySelector("#lookupBtn");

    const withdrawBtn=document.querySelector("#withdrawBtn");
    const debitAmount=document.querySelector("#withdraw");

    const depositBtn=document.querySelector("#depositBtn");
    const deposit=document.querySelector("#deposit");

    const error=document.querySelector("#error");
    const screen=document.querySelector("#screen");

    searchBtn.addEventListener("click",function(){
        if(LookUpCx(customerInfo.value))
        {
            withdrawBtn.disabled=false;
            depositBtn.disabled=false;
            error.innerHTML="";
        }
        else{
            withdrawBtn.disabled=true;
            depositBtn.disabled=true;
            error.innerHTML="User Not Found!!";
            error.style.color="red";
        }
    });

    withdrawBtn.addEventListener("click",function(){
        screen.innerHTML=customers[userindex].withdraw(debitAmount.value);
        debitAmount.value="";
    });

    depositBtn.addEventListener("click",function(){
        deposit
        screen.innerHTML=customers[userindex].deposit(deposit.value);
        deposit.value="";
    });

    