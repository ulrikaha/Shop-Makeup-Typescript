import { IngridientsComponent } from "./IngridientsComponent";

export function HairCareComponent(props: HairCareComponentProps) {
  const { hairType, hairConcerns, ingredients } = props.details;

  return (
    <div>
      {hairType && (
        <p>Hair type: {hairType}</p>
      )}
      <hr />
      <p className="text-muted">Concerns:</p>
      <ul>
        {hairConcerns.map((concern, index) => (
          <li key={index}>{concern}</li>
        ))}
      </ul>
      <IngridientsComponent ingredients={ingredients} />
    </div>
  );
}