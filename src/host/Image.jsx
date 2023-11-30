export default function Image({src,...rest}) {
    src = src && src.includes('https://')
      ? src
      : 'http://localhost:3000/user/upload/'+src;
    return (
      <img {...rest} src={src} alt={''} />
    );
  }