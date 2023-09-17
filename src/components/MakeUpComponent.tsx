import { IngridientsComponent } from "./IngridientsComponent";

export function MakeUpComponent(props: MakeUpComponentProps) {
    const { skinType, ingredients } = props.details;

    return (
        <div>
            <p>Skin type: {skinType}</p>
            <hr />
            <IngridientsComponent ingredients = {ingredients}/> 
        </div>
    )
}


