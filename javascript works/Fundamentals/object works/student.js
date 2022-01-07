class student{
     constructor(name,age,course,gender){     //  setstudent used to initialize instance variables     -----constructor
         this.name=name;
         this.age=age;
         this.course=course;
         this.gender=gender
     }
 printstudent(){
     console.log(this.name,this.age,this.course,this.gender);
 }

}
 var obj=new student("ravi",26,"bsc cs","male")
//  obj.setstudent("ravi",26,"bsc cs","male")
 obj.printstudent()

 var obj1=new student()
 obj1.setstudent("anu",25,"bca","femle")
 obj1.printstudent()