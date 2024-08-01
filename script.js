//your JS code here. If required.
  let inputFields = document.querySelectorAll(".code")
         inputFields.forEach((input, index) => {
                input.addEventListener("input", (event) => {
                      let value = event.target.value
                      if(value){
                             if(index < inputFields.length - 1){
                                  inputFields[index+1].focus()
                             }
                      }
                })
         })

         inputFields.forEach((input,index) => {
                    input.addEventListener("keydown", (event) => {
                        if(event.key === "Backspace"){
                            if(input.value === ""){
                           if(index > 0){
                                inputFields[index-1].focus()
                           }
                        }
                    }
                    })
         })
    