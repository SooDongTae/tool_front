export const NameConverter = ({
  grade,
  class_no,
  student_no,
  owner,
}: {
  grade: number;
  class_no: number;
  student_no: number;
  owner: string;
}) => {
  return (
    <div>
      {grade}
      {class_no}
      {student_no < 10 ? 0 : null}
      {student_no} {owner}
    </div>
  );
};
