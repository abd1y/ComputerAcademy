import LogoImages from '../../assets/Logo3.png'
function Head(){
    return <>
     <header>
       
        <div className="Logo-header">
             <img src={LogoImages} loading='lazy' />
             <h4>Computer Academic </h4>
         
        </div>

    </header>
    </>
}
export default Head