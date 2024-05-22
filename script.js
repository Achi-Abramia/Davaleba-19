// დავალება 1

// მოცემულია მასივი
// ჯავასკრიპტით გამოიტანეთ ეს ინფორმაცია ცხრილის სახით, თითოეულ მწკრივს (tr) ბოლოში  უნდა ჰქონდეს  ღილაკი  delete.
// Delete ღილაკზე დაჭერისას უნდა უნდა  წაიშალოს მომხმარებელი.

// ცხრილის ქვემოთ დაამატეთ add ღილაკი.

// add ღილაკზე დაჭერისას უნდა ამოვიდეს მოდალი (მოდალის დიზაინისთვის შეგიძლიათ გამოიყენოთ bootstrapის  მოდალის ვიზუალი)
// მოდალში უნდა იყოს ფორმა  ველებით( id, email, first_name, last_name) და ორი ღილაკი add და close;
// ინფუთებში შესაძლებელი უნდა იყოს ცვლილებების შეტანა;
// add ღილაკზე დაჭერისას  ფორმა უნდა დასაბმითდეს და ცხრილში push მეთოდით უნდა დაამატოთ ახალი მომხმარებელი;
// დასაბმითებისას დაამატეთ ყველა ველს ვალიდაცია, თუ რომელიმე ცარიელი იქნება ფორმა არ უნდა დასაბმითდეს;
// ფორმის დასაბმითებისას დახურეთ მოდალი;
// closeზე დაჭერიას უნდა დახუროთ მოდალი.


const users = [
    {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",

    },
    {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    
    },
    {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    
    },
    {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    
    },
    {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    
    },
    {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    
    }
    ];


    const tableContainer = document.createElement("div")
    tableContainer.setAttribute("id", "tableContainer")
    document.body.appendChild(tableContainer)
    
    const table = document.createElement("table")
    tableContainer.appendChild(table)
    table.setAttribute("id", "infoTable")
    
    const headerRow = document.createElement("tr")
    table.appendChild(headerRow)

    const headers = ["ID", "Email", "First Name", "Last Name", "Remove"]
    
    headers.forEach(headerContent => {
      const header = document.createElement("th")
      const textNode = document.createTextNode(headerContent)
      header.appendChild(textNode)
      headerRow.appendChild(header)
    })

    users.forEach(user => { 
      const row = document.createElement("tr")

      Object.values(user).forEach(text => {
        const cell = document.createElement("td")
        const textNode = document.createTextNode(text)
        cell.appendChild(textNode)
        row.appendChild(cell)
      })
      const removeUser = document.createElement("td")
      const deleteButton = document.createElement("button")
      deleteButton.textContent= "Delete"
      deleteButton.addEventListener("click", () => {
        table.removeChild(row) 
      })
      removeUser.appendChild(deleteButton)
      row.appendChild(removeUser)
      table.appendChild(row)
    })



    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // დავალება 2
    
    // დაწერეთ  ასინქრონული ფუნქცია, რომელიც არგუმენტად მიიღებს სტრინგს;
    // თუ ამ სტრინგის სიგრძე მეტია 10ზე ფრომისის resolve ბლოკში  გამოიტანეთ თვითონ  სტრინგი;
    // სხვა შემთხვევაში  ფრომისის reject ბლოკში გამოიტანეთ ტექსტი " This is async function";
    // ორივე შემთხვევაში, ტექსტი უნდა გამოიტანოთ  setTimeout მეთოდში 5 წამის დაყოვნებით.
    
    
    const textLength = (word) => {
      return new Promise((resolve, reject) => {
        if (word.length > 10) {
          setTimeout(() => {
            resolve(word)
          }, 5000)
        } else {
          setTimeout(() => {
            reject("This is async function")
          }, 5000)
        }
      })
    }
    
    // პირველი ხერხი
    
    const testTextLength = async () => {
      try {
        const result = await textLength("achiabramia")
        console.log(result)
      }
      catch (error) {
        console.log(error)
      }
    }
    
    testTextLength()
    
    // მეორე ხერხი
    
    textLength("achi").then((data) => {
      console.log(data)
    }).catch((error) => {
      console.log(error)
    })