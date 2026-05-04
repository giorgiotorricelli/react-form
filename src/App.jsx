import { useState } from 'react'

const articleListPrimary = [
    {
      id: 1,
      title: 'Naruto Uzumaki',
      content: 'Uzumaki Naruto è uno shinobi del Villaggio della Foglia. Divenne la forza portante della Volpe a Nove Code durante la notte della sua nascita e a causa di questo e del "mostro" che gli ospita dentro, viene evitato e allontanato dagli altri abitanti del villaggio.',
      img: 'https://static.wikia.nocookie.net/naruto/images/1/18/Naruto_Uzumaki_profilo.png/revision/latest/scale-to-width-down/250?cb=20190416094156&path-prefix=it'
    },
    {
      id: 2,
      title: 'Sakura Haruno',
      content: 'Sakura Uchiha (うちはサクラ, Uchiha Sakura, alla nascita Haruno 春野) è una kunoichi del Villaggio della Foglia. Promossa a Genin, viene assegnata al Team Kakashi assieme a Naruto Uzumaki e Sasuke Uchiha.',
      img: 'https://static.wikia.nocookie.net/naruto/images/d/d5/Sakura_Haruno_profilo.png/revision/latest/scale-to-width-down/250?cb=20201010201759&path-prefix=it'
    },
    {
      id: 3,
      title: 'Sasuke Uchiha',
      content: 'Sasuke Uchiha (うちはサスケ, Uchiha Sasuke) è un ninja del Villaggio della Foglia e unico sopravvissuto del Clan Uchiha dopo il massacro perpetrato dal fratello Itachi Uchiha. Dopo la promozione a Genin, viene assegnato al Team Kakashi assieme a Sakura Haruno e Naruto Uzumaki, suo rivale e migliore amico.',
      img: 'https://static.wikia.nocookie.net/naruto/images/f/f3/Sasuke_Uchiha_profilo.png/revision/latest/scale-to-width-down/250?cb=20201010201022&path-prefix=it'
    }
  ];

function App() {
  const emptyArticle = {
    title: '',
    content: '',
    img: ''
  }

  const [article, setArticle] = useState(emptyArticle);
  const [finalArticleList, setFinalArticleList] = useState(articleListPrimary);

  function changeHandler(event){
    const newArticle = {
      ...article,
      [event.target.name]: event.target.value
    }
    setArticle(newArticle);
  }

  function submitHandler(event){
    event.preventDefault();

    const articleToAdd = {
      ...article,
      id: crypto.randomUUID()
    }

    const newArticleList = [...finalArticleList, articleToAdd];
    setFinalArticleList(newArticleList);
    
    console.log(finalArticleList);
  }

  
  

  return <>
    <h1>Ciao</h1>
    <div className="container">
      <div className="card-wrapper row justify-content-between">
        {finalArticleList.map(current => {
          return <div className="card my-card col-4" key={current.id}>
            <img src={current.img} />
            <div className="card-body pb-5">
              <h5 className="card-title">{current.title}</h5>
              <p className="card-text">{current.content}</p>
              <a href="#" className="btn btn-primary btn-edit">Edit</a>
            </div>
          </div>
        })}
      </div>
    </div>
    <div className="container">
      <form className='my-form' onSubmit={submitHandler}>
        <div className="mb-3">
          <label className='form-lable'>URL imamgine</label>
          <input onChange={changeHandler} type="text" className='form-control' name='img'/>
        </div>
        <div className="mb-3">
          <label className='form-lable'>Nome Personaggio</label>
          <input onChange={changeHandler} type="text" className='form-control' name='title'/>
        </div>
        <div className="mb-3">
          <p><label className='form-lable' style={{marginBottom: 0}}>Contenuto dell'articolo</label></p>
          <textarea onChange={changeHandler} name="content" id='description' rows="4" cols="50"></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>Aggiungi</button>
      </form>
    </div>
  </>
    ;
}

export default App
