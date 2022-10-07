import Poem from "./Poem";


function Home({ poems ,addToCollection,addToLiked}) {

      return (
            <div className="Home">
                  {poems.map((poem, key) => {
                        if (poem.content !== undefined) {
                              return <Poem poem={poem} key={key} addToCollection={addToCollection} addToLiked={addToLiked}/>;

                        }
                        return null;
                  })}
            </div>
      )
}
export default Home;
