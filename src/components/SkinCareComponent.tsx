import { IngridientsComponent } from "./IngridientsComponent";

export function SkinCareComponent(props: SkinCareComponentProps) {
  const { skinType, targetedConcerns, ingredients } = props.details;

  return (
    <div>
      {skinType && (
        <p>Skin type: {skinType}</p>
      )}
      <hr />
      <p className="text-muted">Concerns:</p>
      <ul>
        {targetedConcerns.map((concern, index) => (
          <li key={index}>{concern}</li>
        ))}
      </ul>
      <IngridientsComponent ingredients={ingredients} />
      <hr />
    </div>
  );
}