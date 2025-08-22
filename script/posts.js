function getPosts(){
    axios.get("https://tarmeezacademy.com/api/v1/posts?limit=50")
    .then((respons)=>{
        let data = respons.data.data
        console.log(data)
        document.getElementById("posts").innerHTML = ""
        for (let i in data) {
            let obj = data[i];
            let author = obj.author
            let createdTime = obj.created_at
            let title = ""
            let body = obj.body
            let commantsCount = obj.comments_count
            let postImage = obj.image

            if(obj.title != null){
                title = obj.title
            }

            let post = `
            <DIV class="py-3 pt-6" >
            <!-- USER INFO -->
            <div class="flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 max-w-lg mx-auto">
              <div class="flex gap-4 p-3">
                <img class="w-10 h-10 rounded-full"
                  src= ${author.profile_image}
                  alt="">
                <div class="font-medium dark:text-white">
                  <div>${author.username}</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                </div>
              </div>
              <!-- // USER INFO //-->
              <!-- IMG -->
              <a href="#" class="m-auto">
                <img class="rounded-t-lg " src=${postImage} />
                <P style="color: rgba(182, 181, 181, 0.938);" class="text-xs">${createdTime}</P>
              </a>
              <!--// IMG //-->
              <!-- POST CONTENT -->
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${body}</p>
                <hr class="p-2 text-2xs text-gray-400">
                <!--// POST CONTENT //-->
                <div>
                  <span class="text-gray-300"><span>(${commantsCount})</span> comments</span>
                </div>
              </div>
            </div>
          </DIV>
            `

            document.getElementById("posts").innerHTML += post
        }
        
    })
    .catch((error) => console.log(error))
}
getPosts()