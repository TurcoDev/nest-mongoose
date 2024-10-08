import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Author } from 'src/author/author.schema';

@Schema()
export class Book extends Document {
  @Prop()
  title: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Author' })
  author: Author;
}

export const AuthorSchema = SchemaFactory.createForClass(Book);
