import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: { type: 'String', required: true },
  source: { type: 'String', required: true },
  type: { type: 'String', required: true },
  id: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Song', songSchema);
