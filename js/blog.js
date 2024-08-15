function blogLoad() {
	load();
	console.log(info);
	let post;
	let news = [];
	for (let i = (info.length-1); i >= 0; i--) {
		post = `<div class="newsbox">
			<div class="newstitle">`+info[i][0]+`</div>
			<a href="blog/`+i+`/">
				<img class="newsbg" src="blog/`+i+`/`+info[i][1]+`"alt=`+info[i][2]+`/>
			</a>
		</div>`;
		//post = '<div class="newsbox"><div class="newstitle">'+info[i][0]+'</div><a href="blog/'+i+'.html"><img class="newsbg" src="images/blog/'+info[i][1]+'"alt='+info[i][2]+'/></a></div>';
		news.unshift(post);
	}
	for (let i=(news.length-1);i>=0;i--) {document.getElementById('blog').innerHTML += news[i];}
}