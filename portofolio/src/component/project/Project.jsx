import React from 'react'
import {createUseStyles} from 'react-jss'
import {useNavigate} from "react-router-dom";

const Project = () => {
  const classes = useStyles()
  let navigate = useNavigate();
  return (
    <div className={classes.container}>
        <div>
            <ul className={classes.ul}>
                <li className={classes.title}><a href="/" className={classes.a}> Portofolio </a></li>
                <li><a href="/"                           className={classes.a}> Resume     </a></li>
                <li><a href="/project"                    className={classes.a}> Project    </a></li>
                <li><a href="/skill"                      className={classes.a}> Skill      </a></li>
            </ul>
        </div>

        <div className={classes.body}>
            <h1 className={classes.judul}>Project</h1>
            <div className={classes.wrapGallery}> 
                <div className={classes.gallery}> 
                    <button className={classes.btn} 
                     >
                        <img className={classes.galleryImg} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="sophia" />  
                        <div className={classes.desc}>Project 1</div> 
                    </button>   
                </div>

                <div className={classes.gallery}>  
                    <button className={classes.btn}
                    >
                        <img className={classes.galleryImg} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="sophia" />  
                        <div className={classes.desc}>Project 2</div> 
                    </button>      
                </div>

                <div className={classes.gallery}>  
                    <button className={classes.btn}
                    >
                        <img className={classes.galleryImg} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="sophia" />  
                        <div className={classes.desc}>Project 3</div> 
                    </button>     
                </div>

                <div className={classes.gallery}>  
                    <button className={classes.btn}
                    >
                        <img className={classes.galleryImg} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="sophia" />  
                        <div className={classes.desc}>Project 4</div> 
                    </button>      
                </div>

                <div className={classes.gallery}>  
                    <button className={classes.btn}
                    >
                        <img className={classes.galleryImg} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="sophia" />  
                        <div className={classes.desc}>Project 5</div> 
                    </button>      
                </div>
            </div>
        </div>
    </div>
  )
}

const useStyles = createUseStyles({
    container: {
        backgroundColor : '#fff',
        margin: 0,
        color : 'white',
    },
    gallery : {
        margin: '10px',
        padding : '5px',
        border: '2px solid #fff',
        width : '20%',
        boxShadow : '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition : '0.3s',
    },
    galleryImg : {
        width : '100%',
    },
    desc : {
        padding : '15px',
        textAlign : 'center',
        color : '#9FC088',
        backgroundColor :'white',
        fontWeight : 'bold',
    },
    wrapGallery : {
        display : 'flex',
        flexDirection : 'row',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '50%',
    },
    judul : {
        fontSize : 40,
        margin: 0,
        padding: 0, 
        width : '100%',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '50%',
        color : '#9FC088',
    },
    ul : {
        position : 'fixed', 
        width : '100%',
        listStyle : 'none',
        marginTop: 0,
        padding: 0,
        backgroundColor : '#fff',
    }, 
    a : {
        float : 'right',
        alignItems : 'center',
        textAlign : 'center',
        color : '#9FC088',
        padding : '16px',
        textDecoration : 'none',
        fontWeight :'bold',
        fontSize: 20,
    },
    title : {
        float : 'left',
        color : '#9FC088',
        fontSize : 40,
        fontWeight : 'bold',
    },
    btn : {
        backgroundColor : 'white',
        border : 'none',
    }
})
export default Project;