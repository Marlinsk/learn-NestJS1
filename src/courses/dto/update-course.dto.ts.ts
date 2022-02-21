import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto.ts';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
