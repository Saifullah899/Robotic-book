import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const ChapterList = [
  {
    title: 'Chapter 1: Introduction to Physical AI',
    description: 'Definition of Physical AI, difference from virtual AI, and real-world applications',
    to: '/docs/chapter-1-introduction/chapter',
    priority: 'P1',
  },
  {
    title: 'Chapter 2: Robot Components and Basic Control',
    description: 'Understanding the fundamental components of robots - sensors, actuators, controllers, mechanical structures, and basic control logic',
    to: '/docs/chapter-2-foundations/chapter',
    priority: 'P1',
  },
  {
    title: 'Chapter 3: Perception and Sensing',
    description: 'Advanced perception systems in Physical AI - sensors, data processing, computer vision, and sensor fusion for understanding the physical environment',
    to: '/docs/chapter-3-perception/chapter',
    priority: 'P1',
  },
  {
    title: 'Chapter 4: Motion Planning and Control',
    description: 'Motion planning algorithms, trajectory generation, control theory, and locomotion methods for navigating and moving in physical environments',
    to: '/docs/chapter-4-motion/chapter',
    priority: 'P1',
  },
  {
    title: 'Chapter 5: Manipulation and Interaction',
    description: 'Robot manipulation systems, end-effectors, grasping strategies, manipulation planning, and human-robot interaction in physical environments',
    to: '/docs/chapter-5-manipulation/chapter',
    priority: 'P1',
  },
  {
    title: 'Chapter 6: Advanced Topics in Physical AI',
    description: 'Advanced concepts in Physical AI including learning, adaptation, integration challenges, and future directions for complex real-world applications',
    to: '/docs/chapter-6-advanced/chapter',
    priority: 'P1',
  },
];

function ChapterCard({ title, description, to, priority }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('card', styles.chapterCard)}>
        <div className="card__header">
          <Heading as="h3" className={styles.chapterTitle}>
            {title}
            <span className={clsx('badge badge--secondary', styles.priorityBadge)}>{priority}</span>
          </Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link className="button button--primary" to={to}>
            Read Chapter
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function TextbookChapters() {
  return (
    <section className={styles.chapters}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2" className={clsx('text--center', styles.chapterSectionTitle)}>
              Textbook Chapters
            </Heading>
            <p className={clsx('text--center', styles.chapterSectionSubtitle)}>
              Explore the fundamentals of Physical AI and Humanoid Robotics
            </p>
          </div>
        </div>
        <div className="row">
          {ChapterList.map((props, idx) => (
            <ChapterCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}