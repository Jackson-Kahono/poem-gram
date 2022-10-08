import Poem from "./Poem";

function Like({poems}){
      return (
            <div className="Poems">
                  {poems.map((poem) => (
                        <Poem key={poem.id} poem={poem} />
                  ))}
            </div>

      )
}

export default Like;
