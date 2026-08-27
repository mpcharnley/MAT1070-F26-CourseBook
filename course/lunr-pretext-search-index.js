var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "  Introduction  This eBook contains all of the course material for our MAT 1070 class this semester. It is NOT a substitute for attending class, participating in the activities, completing the online homework, and reading the textbook. It is meant to be a supplement to all of these, allowing you to go back and review material\/solutions that were confusing to you when you saw them the first time. This is the instructor version of the book, containing all of the relevant content, with solutions wherever written.    Course Notes  These are the notes that were covered during class time. The hand-written version of the notes that was actually presented is available directly from the course Canvas page. These notes are a typed version that covers the same content in a similar level of detail.    In-Class Activities  Copies of any in-class activities are available here. This is not a substitute for working on the activity in-class, but if you would like a blank copy to reattempt later in the semester, you can find it here.    Handouts  Any helpful handouts or notes sheets will be included here.    Homework  Any hand-in homework that does not come directly from an in-class activity will be available here. The online homework is a separate part of the course, available from our Canvas site.   "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Monday 8\/31     Introduction to the class    Introduction to Graphing      Introduction to the Course  Welcome to College Algebra!    Introduction to the People  Your instructor is Dr. Matt Charnley. This is his first year at Wayne State, but not his first year teaching overall. He spent the last seven years teaching at Rutgers University in New Jersey, covering a wide variety of classes from Math for Liberal Arts to Differential Equations.  Who are all of you?    Graphing  What is a graph?   A visual representation of the solutions to an equation.    Mark a point if the value solves the given equation.          Wednesday 9\/2      Friday 9\/4     "
},
{
  "id": "notes-week-01-3-2",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-3-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Introduction to the class    Introduction to Graphing    "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Monday      Wednesday      Friday     "
},
{
  "id": "wksht-graphing-equations",
  "level": "1",
  "url": "wksht-graphing-equations.html",
  "type": "Worksheet",
  "number": "",
  "title": "Graphing Equations",
  "body": " Graphing Equations       Dates  Assigned Date:  Due Date:    Purpose  The skill that you will practice in this exercise is graphing equations. Mastering this skill is vital to your development as a student of mathematics. Our textbook shows graphical solutions to most problems alongside the algebraic solution. Having a firm grasp of the basics will enhance a deeper understanding as you progress through the semester and on into Calculus.    Task  Stuff    Resources  Use your notes from the first class, the online eText or contact your instructor when you have questions.    Criteria for Success  Your assignment is due to your instructor by the date listed above. You must submit 1 pdf document as described in the syllabus, through Canvas. Your instructor will be assessing completeness and correctness for each question. This assignment will be worth 20 points.         [2] What does the graph of an equation represent?    The set of all solutions points to an equation.      [9] Consider the equation .     Graph the equation using any two points.    Learn how to do tikz figures here.      Graph the equation using intercepts.      Graph the equation using the slope and -intercept.      Fully explain each method and your solution.    "
},
{
  "id": "wksht-graphing-equations-3",
  "level": "2",
  "url": "wksht-graphing-equations.html#wksht-graphing-equations-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  [2] What does the graph of an equation represent?    The set of all solutions points to an equation.   "
},
{
  "id": "wksht-graphing-equations-4",
  "level": "2",
  "url": "wksht-graphing-equations.html#wksht-graphing-equations-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  [9] Consider the equation .     Graph the equation using any two points.    Learn how to do tikz figures here.      Graph the equation using intercepts.      Graph the equation using the slope and -intercept.      Fully explain each method and your solution.   "
},
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "",
  "title": "Handouts",
  "body": " Handouts    "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Homework",
  "body": " Homework    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
