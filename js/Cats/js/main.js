//Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//Save bookmark
function saveBookmark(event){
	//Get form values
	var siteName = document.getElementById('siteName').value;
	var siteUrl =document.getElementById('siteUrl').value;
	
	
	//create a bookmark object
	var bookmark = {
		name: siteName,
		url: siteUrl
	}
	
	if(localStorage.getItem('bookmarks') === null){
		//Init Array
		var bookmarks = [];
		//Add to Array
		bookmarks.push(bookmark);
		//Set to localStorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	} else {
		//get bookmarks from localStorage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		//Add bookmark to array
		bookmarks.push(bookmark);
		//Re-set to localStorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
		
	}
	
	//Prevent form from submitting
	event.preventDefault();
	
}

/*
function fetchBookmarks(){
	//get bookmarks from localStorage
	var bookmarks = localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	//get output id
	var bookmarksResults = document.getElementById('bookmarksResults');
	
	//build output
	
	bookmarksResults.innerHTML = ''
	for(var i = 0; i <bookmarks.length; i++){
		var name = bookmarks[i].name;
		var url = bookmarks[i].url
	*/


	
