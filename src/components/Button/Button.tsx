import Style from './Button.module.scss';

const Button: React.FC< {text: string, bc:string,OnClick:()=>void}> = ({text,bc,OnClick}) =>{
  return (
    <div onClick={()=>OnClick()} className={Style.body}  style={{background:bc}}>
         {text}
    </div>
  )
}

export default Button