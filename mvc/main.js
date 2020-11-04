    const posts = [
    {
        name: "Bassel"   ,
        text: "hey bassel"
    },
    {
        name: "amro",
        text: "hey amro"
    },
    {
        name:"danny",
        text:"welcome"
    }
    ]
    const render = function () {
        $("#persons").empty()
        for (let post of posts) {
            let postBox = $("<div class='post-box'><p class=name>" + post.name + "</p><p class=text>" + post.text + "</p></div>")
            $("#persons").append(postBox)
        }
    }
    $("#post").on("click", function () {
        let newName = $("#name").val()
        let newText = $("#text").val()
        let newPost = {name:newName,text:newText}
        posts.push(newPost)

        render()
    })
    
    