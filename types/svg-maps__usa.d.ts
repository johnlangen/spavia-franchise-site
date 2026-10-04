declare module "@svg-maps/usa" {
  const usa: {
    label: string;
    viewBox: string;
    locations: { id: string; name: string; path: string }[];
  };
  export default usa;
}
