# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

Your answer:
Inside of Ruby a Hash is a collection of key: value pairs, in order to create a Hash we can use curly braces or the keyword Hash.new. For the first method we would create a variable, I will call it hash_method_one. Now I will assign that variable to a set of curly braces, and inside that I would then create my key:value pairs. I could have a key named name, followed by a colon then my value of Luis inside single quotes. This would be my Hash. The next method I cold use is the keyword Hash.new. In order to use this method I need to also create a variable. I will go with a variable name of has_method_two. Now I will assign this variable to Hash.new. I have created my Hash and so now I need to add a key:value to it. I would call my variable and use bracket notation to pass my KEY using a colon. Then outside I would assign this to my the value I want. These are two ways of creating a Hash with key:values, but there are some more steps to reassign those key:values or delete them. Changing the value would look the same as the original assigning of the value but now you would change it to whatever you would want. Deleting it would involve using the .delete on the variable. The .delete needs parenthesis so here you would pass the key you want to delete. These are the two ways to create a Hash, I personally prefer using the second newer method.

<!-- Trying to verbalize making it and also making examples if I were to be asked to code this  -->

Example for method 1

hash_method_one = {name:'Luis'}


Example for method 2 

hash_method_two = Hash.new
has_method_two[:name] = 'Luis' <---- Created a key:value of name:'Luis'
has_method_two[:name] = 'Reassigned' <--- The value 'Luis' is now 'Reassigned'
has_method_two.delete(:name) <--- I deleted my key:value here

Researched answer: 
I completely forgot to add the usage of the Hash rocket, this is how we create key:value pair with a key being a different data type. This involves the usage of the first method using curly braces. If I wanted my key to be a string, I would put it in single quotes then use Hash rocket =>. My value would follow after the Hash rocket. Now I can have a string key and string value. Upon some research I learned its also referred to as a fat comma. Also I will have to say that the key is a Symbol.

2. What is a gem?

Your answer: I cannot say I currently have a wide knowledge of a gem in Ruby. I know it is how we install dependencies. I have worked with it when installing RSPEC but outside of this usage I cannot give a in-depth answer.

Researched answer: It is a package manager for installing libraries, with this we can install gems and also distribute them. I could install a gem that would allow me to use methods that someone else created. There are lots of gems with different uses. I have currently worked with RSPEC and Rails as a gem. 

3. What is Ruby on Rails?

Your answer: Ruby on Rails is a framework for creating a web application. I know it uses a Model View Controller structure. The Model is the database, View is what I can see as a user, and Controller is how interactions/responses to users are handled.

Researched answer: It is an open-source web app development framework, a gem created in Ruby. Rails makes creating applications easier as it gives a you pre-built structure to work with. Rails uses the Model View Controller architecture. The Model is the data structure, View is the visual side which is what a user interacts with and gives input to. The Controller is how the data is sent to the View and also how the data is handled using CRUD. It also uses Active Record which is how database queries are made in RoR.

4. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is how information is taken and put into tables. This information is put into columns and rows, the data is stored under similar keys. If I had a table about cars, I would have make, model, year...etc. This information that would follow under would be different but relates to each other. I am sure there are different databases lots which I don't know the names of. I know there are Cloud databases. I haven't worked with databases a whole lot yet. I'm sure there are some I'm familiar with but just don't know the naming for them.

Researched answer: It how information is collected and organized in a structure where it stored in a table. It then placed into columns and rows. When information is placed this we can see how it relates to each other. Relational tables are split by attributes which are columns and rows which have the value. These tables contain primary keys which are unique identifier of rows.  This model was created in the 1970s by E.F Codd. 

5. What are primary keys? Why are they important?

Your answer: Primary keys are a unique identifier. They are apart of rows, it makes it easier for differentiating between information that is being stored. I know in working with Rails each instance has its own ID when created. It is important because different rows could be easily confused with one another, also we are able to call on that data by its primary key.

Researched answer: A primary key must be unique and each table can only have a single primary key. They also cannot contain a Null value.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: The REST stands for Representational State Transfer. It maps HTTP Verbs and CRUD so that it easier to navigate and understand an application

2. JSON: JSON stands for JavaScript Object Notation. It is a text format for storing and transporting data. Language independent. Used to send data between computers.
 
3. ERB: Embedded Ruby. It is a templating system for Ruby, allows for code to be added to a plain text document.

4. Params:
    How more information is passed to program by passing a value into the controller.
5. API:
Application Programming Interface. Its a way for tow or more computer programs to communicate to each other. 