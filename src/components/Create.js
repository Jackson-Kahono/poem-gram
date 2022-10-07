function Create({ handleAdd }) {
      return (
            <div className="Create">
                  <h1>Create</h1>
                  <form onSubmit={handleAdd}>
                        <input type="text" name="title" placeholder="Title" />
                        <textarea name="content" placeholder="Content" />
                        <input name="poet" placeholder="Poet" />
                        <button type="submit">Add</button>
                  </form>
            </div>

      )
}
export default Create;
