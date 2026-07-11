import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export interface FilmPosterCardProject {
  id: string;
  title: string;
  slug: string;
  posterImage: string;
  director?: string;
  cast?: string;
  budget?: string;
  equityAsk?: string;
  statusLabel?: string;
  timeSensitive?: boolean;
  urgency?: boolean;
  funded?: boolean;
}

interface FilmPosterCardProps {
  project: FilmPosterCardProject;
}

const LABEL: React.CSSProperties = {
  fontFamily: "'Barlow', sans-serif",
  fontWeight: 300,
  fontSize: '0.65rem',
  letterSpacing: '0.55em',
  textTransform: 'uppercase',
};

export default function FilmPosterCard({ project }: FilmPosterCardProps) {
  const [hovered, setHovered] = useState(false);

  // Badge color logic
  const badgeColor = project.timeSensitive
    ? '#ffc800'
    : project.funded
    ? '#00D4E8'
    : project.urgency
    ? '#CC0000'
    : '#CC0000';

  return (
    <div
      style={{
        position: 'relative',
        aspectRatio: '2/3',
        overflow: 'hidden',
        background: 'var(--bg)',
        border: hovered
          ? '1px solid rgba(201,151,31,0.35)'
          : '1px solid var(--border)',
        transition: 'border-color 0.4s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Poster image */}
      <img
        src={project.posterImage}
        alt={project.title}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top center',
          opacity: hovered ? 0.9 : 0.75,
          transform: hovered ? 'scale(1.03)' : 'scale(1)',
          transition: 'opacity 0.5s ease, transform 0.7s ease',
        }}
      />

      {/* Top gradient — always dark, sits on poster image */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '35%',
        background: 'linear-gradient(to bottom, rgba(8,8,8,0.65), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Ghost overlay box — always dark regardless of theme */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        background: 'rgba(8,8,8,0.82)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '14px 16px 16px',
      }}>

        {/* Status dot + label */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          marginBottom: '10px',
        }}>
          <span style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: badgeColor,
            flexShrink: 0,
            animation: 'pulse 1.5s ease-in-out infinite',
            display: 'inline-block',
          }} />
          <span style={{
            ...LABEL,
            fontSize: '0.6rem',
            letterSpacing: '0.4em',
            color: badgeColor,
          }}>
            {project.statusLabel ?? 'Funding Open'}
          </span>
        </div>

        {/* Title */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
          color: '#FFFFFF',
          lineHeight: 1.15,
          marginBottom: '10px',
          letterSpacing: '0.01em',
        }}>
          {project.title}
        </p>

        {/* Budget / Equity Ask */}
        {(project.budget || project.equityAsk) && (
          <p style={{
            ...LABEL,
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '10px',
            lineHeight: 1.6,
          }}>
            {project.budget && <span>{project.budget}</span>}
            {project.budget && project.equityAsk && (
              <span style={{ color: 'rgba(255,255,255,0.28)', margin: '0 6px' }}>·</span>
            )}
            {project.equityAsk && (
              <span style={{ color: '#C9971F' }}>{project.equityAsk}</span>
            )}
          </p>
        )}

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'rgba(255,255,255,0.08)',
          marginBottom: '10px',
        }} />

        {/* Director row */}
        {project.director && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '6px',
          }}>
            <span style={{
              ...LABEL,
              fontSize: '0.58rem',
              letterSpacing: '0.35em',
              color: 'rgba(255,255,255,0.38)',
            }}>
              Director
            </span>
            <span style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: '10px',
              color: 'rgba(255,255,255,0.78)',
              letterSpacing: '0.04em',
              textAlign: 'right',
            }}>
              {project.director}
            </span>
          </div>
        )}

        {/* Cast row */}
        {project.cast && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '12px',
          }}>
            <span style={{
              ...LABEL,
              fontSize: '0.58rem',
              letterSpacing: '0.35em',
              color: 'rgba(255,255,255,0.38)',
              flexShrink: 0,
              marginRight: '10px',
            }}>
              Cast
            </span>
            <span style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: '10px',
              color: 'rgba(255,255,255,0.68)',
              letterSpacing: '0.03em',
              textAlign: 'right',
              lineHeight: 1.55,
            }}>
              {project.cast}
            </span>
          </div>
        )}

        {/* VIEW OVERVIEW CTA */}
        <Link
          to={`/project/${project.slug}`}
          style={{
            display: 'block',
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 300,
            fontSize: '10px',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: '#C9971F',
            textDecoration: 'none',
            borderTop: '1px solid rgba(201,151,31,0.25)',
            paddingTop: '10px',
            transition: 'color 0.25s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
          onMouseLeave={e => (e.currentTarget.style.color = '#C9971F')}
        >
          View Overview →
        </Link>
      </div>
    </div>
  );
}
