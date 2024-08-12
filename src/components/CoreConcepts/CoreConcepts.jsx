import './CoreConcepts.css';

export function CoreConcepts( {description,title,image} ) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }