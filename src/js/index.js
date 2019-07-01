require(["require.config"], () => {
  require(["header","nav","footer"], (header) => {
    console.log(header);
    
  })
})