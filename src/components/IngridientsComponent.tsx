
export function IngridientsComponent(props: IngridientsComponentProps) {

  return (
    props.ingredients && (
      <div>
        <p className="text-muted">Ingredients</p>
        <ul>
          {props.ingredients.map((ingredient: string, index: number) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    )

  );
}