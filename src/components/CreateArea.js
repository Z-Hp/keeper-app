export default function CreateArea() {
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="6" />
        <button>Add</button>
      </form>
    </div>
  );
}
