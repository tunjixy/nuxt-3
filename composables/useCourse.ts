import CourseData from "./CourseData";

export const useCourse = () => {
  const chapters = CourseData.chapters.map((chapter) => {
    const lessons = chapter.lessons.map((lesson) => ({
      ...lesson,
      path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
    }));
    return {
      ...chapter,
      lessons,
    };
  });
  return { ...CourseData, chapters };
};
