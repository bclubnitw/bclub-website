"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ClubEvent } from "@/constants/events";

function formatDateBadge(dateStr: string, endDateStr?: string | null) {
  const parseDate = (str: string) => {
    const [y, m, d] = str.split("-").map(Number);
    return new Date(y, m - 1, d);
  };

  const startDate = parseDate(dateStr);
  const startDay = startDate.getDate();
  const startMonth = startDate.toLocaleDateString("en-IN", { month: "short" });
  const startYear = startDate.getFullYear();

  if (!endDateStr) {
    return `${startDay} ${startMonth} ${startYear}`;
  }

  const endDate = parseDate(endDateStr);
  const endDay = endDate.getDate();
  const endMonth = endDate.toLocaleDateString("en-IN", { month: "short" });
  const endYear = endDate.getFullYear();

  if (startMonth === endMonth && startYear === endYear) {
    return `${startDay} - ${endDay} ${startMonth} ${startYear}`;
  }

  return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${endYear}`;
}

function checkIsEventActive(event: ClubEvent, currentTime: number): boolean {
  const targetDateStr = event.endDate || event.date;
  const [y, m, d] = targetDateStr.split("-").map(Number);
  const eventEnd = new Date(y, m - 1, d, 23, 59, 59, 999).getTime();
  return eventEnd >= currentTime;
}

export default function EventsClient({ events }: { events: ClubEvent[] }) {
  const [activeModalEvent, setActiveModalEvent] = useState<ClubEvent | null>(null);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
  }, []);

  // Before hydration, sort by default date to guarantee identical server and initial client markup
  const upcomingEvents = now
    ? events
        .filter((e) => checkIsEventActive(e, now))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    : [];

  const pastEvents = now
    ? events
        .filter((e) => !checkIsEventActive(e, now))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : events;

  return (
    <div className="space-y-24">
      {/* 1. UPCOMING SECTION */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-bclub-slate/30 pb-4 gap-2">
          <div>
            <h2 className="font-display uppercase text-2xl sm:text-3xl font-extrabold tracking-wide text-white flex items-center gap-3">
              <span>Upcoming Initiatives</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            </h2>
            <span className="font-mono text-xs text-bclub-cyan uppercase tracking-wider block mt-1">
              Active Call for Delegates & Registrations
            </span>
          </div>
          <span className="font-mono text-xs text-bclub-teal uppercase tracking-widest font-bold">
            {upcomingEvents.length} ACTIVE
          </span>
        </div>

        {now !== null && upcomingEvents.length === 0 ? (
          <div className="border border-dashed border-bclub-slate/30 bg-bclub-charcoal/20 p-12 text-center rounded-sm">
            <span className="font-mono text-xs text-bclub-teal uppercase tracking-widest block mb-2">
              RADAR CLEAR // CALENDAR COMPILING
            </span>
            <p className="font-display text-xl text-white uppercase font-bold">
              No Active Operations Live At This Moment
            </p>
            <p className="font-sans text-xs text-bclub-ice/60 max-w-md mx-auto mt-2">
              Registrations for subsequent events will be posted here. Review our archived operations below.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                isUpcoming
                onSelect={() => setActiveModalEvent(event)}
              />
            ))}
          </div>
        )}
      </section>

      {/* 2. PAST ARCHIVE SECTION */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-bclub-slate/30 pb-4 gap-2">
          <div>
            <h2 className="font-display uppercase text-2xl sm:text-3xl font-extrabold tracking-wide text-white">
              Archived Operations
            </h2>
            <span className="font-mono text-xs text-bclub-cyan uppercase tracking-wider block mt-1">
              Historical Catalogue • Previous Academic Terms
            </span>
          </div>
          <span className="font-mono text-xs text-bclub-slate uppercase tracking-widest font-bold">
            {pastEvents.length} RECORDED
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              isUpcoming={false}
              onSelect={() => setActiveModalEvent(event)}
            />
          ))}
        </div>
      </section>

      {/* 3. EVENT DOSSIER DETAIL MODAL */}
      {activeModalEvent && (
        <EventDossierModal
          event={activeModalEvent}
          currentTime={now ?? 0}
          onClose={() => setActiveModalEvent(null)}
        />
      )}
    </div>
  );
}

function EventCard({
  event,
  isUpcoming,
  onSelect,
}: {
  event: ClubEvent;
  isUpcoming: boolean;
  onSelect: () => void;
}) {
  const dateLabel = formatDateBadge(event.date, event.endDate);

  return (
    <div
      onClick={onSelect}
      className={`group cursor-pointer relative rounded-sm transition-all duration-300 flex flex-col justify-between overflow-hidden backdrop-blur-md border ${
        isUpcoming
          ? "bg-linear-to-b from-bclub-navy/70 via-bclub-charcoal/50 to-bclub-dark border-bclub-teal/60 hover:border-bclub-teal shadow-[0_0_25px_rgba(55,183,195,0.15)] hover:shadow-[0_0_35px_rgba(55,183,195,0.3)] hover:-translate-y-1"
          : "bg-bclub-charcoal/30 border-bclub-slate/25 hover:border-bclub-teal/40 hover:bg-bclub-navy/20 hover:shadow-[0_4px_20px_rgba(10,39,83,0.3)] hover:-translate-y-0.5"
      }`}
    >
      <div className="relative aspect-[16/9] w-full bg-bclub-dark overflow-hidden border-b border-bclub-slate/20">
        {event.poster ? (
          <Image
            src={`/events/${event.poster}`}
            alt={event.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-linear-to-br from-bclub-navy/40 to-bclub-dark p-6 text-center select-none">
            <span className="font-display uppercase text-lg sm:text-xl font-black tracking-wider text-bclub-teal/40 group-hover:text-bclub-teal/70 transition-colors">
              {event.title}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-bclub-slate/70 mt-2">
              {event.academicYear}
            </span>
          </div>
        )}

        {isUpcoming && (
          <div className="absolute top-3 left-3 bg-emerald-500 text-black text-[10px] font-mono font-black uppercase tracking-widest px-2.5 py-1 shadow-md">
            UPCOMING EVENT!
          </div>
        )}

        <div className="absolute top-3 right-3 bg-bclub-dark/80 backdrop-blur-md border border-bclub-slate/40 text-bclub-ice text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5">
          {event.academicYear}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-bclub-teal">
            <span>📅 {dateLabel}</span>
            {event.time && <span className="text-bclub-slate/80">• {event.time}</span>}
          </div>

          <h3 className="font-display uppercase text-xl sm:text-2xl font-extrabold text-white tracking-wide group-hover:text-bclub-teal transition-colors leading-snug">
            {event.title}
          </h3>

          <p className="font-sans text-xs sm:text-sm text-bclub-cyan/90 font-medium line-clamp-1">
            {event.tagline}
          </p>

          <p className="font-sans text-xs text-bclub-ice/65 line-clamp-2 leading-relaxed">
            {event.description}
          </p>
        </div>

        <div className="pt-4 border-t border-bclub-slate/20 flex items-center justify-between text-xs font-mono">
          <span className="text-bclub-slate truncate max-w-45">
            📍 {event.venue}
          </span>
          <span className="text-bclub-teal font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            DETAILS <span>→</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function EventDossierModal({
  event,
  currentTime,
  onClose,
}: {
  event: ClubEvent;
  currentTime: number;
  onClose: () => void;
}) {
  const isUpcoming = checkIsEventActive(event, currentTime);
  const dateFormatted = formatDateBadge(event.date, event.endDate);

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 pt-20 sm:pt-24 pb-6 bg-bclub-dark/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-linear-to-b from-bclub-charcoal/95 to-bclub-dark border-2 border-bclub-teal/60 text-bclub-ice shadow-[0_0_50px_rgba(10,39,83,0.8)] rounded-sm overflow-hidden flex flex-col max-h-[calc(100vh-6rem)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Fixed Header */}
        <div className="shrink-0 flex items-center justify-between px-6 py-4 bg-bclub-dark border-b border-bclub-slate/30">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-bclub-teal" />
            <span className="font-mono text-xs uppercase tracking-widest text-bclub-teal font-bold">
              EVENT DOSSIER // {event.academicYear}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-bclub-ice/60 hover:text-red-400 font-mono text-base px-2 py-1 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto min-h-0 flex-1 space-y-6">
          {event.poster && (
            <div className="relative w-full max-h-95 sm:max-h-[440px] aspect-[4/5] sm:aspect-[16/10] mx-auto bg-bclub-dark/90 border border-bclub-slate/30 rounded-xs overflow-hidden flex items-center justify-center">
              {/* Blurred backdrop fill to eliminate dead black gutters */}
              <Image
                src={`/events/${event.poster}`}
                alt=""
                aria-hidden="true"
                fill
                className="object-cover blur-2xl opacity-25 scale-110 pointer-events-none"
              />
              {/* Sharp original poster rendered in its natural dimensions */}
              <Image
                src={`/events/${event.poster}`}
                alt={event.title}
                fill
                sizes="(max-width: 640px) 90vw, 600px"
                className="object-contain p-2 relative z-10"
                priority
              />
            </div>
          )}

          <div>
            {event.tagline &&
              <span className="font-mono text-xs text-bclub-cyan uppercase tracking-wider block mb-1">
                {event.tagline}
              </span>
            }
            <h2 className="font-display uppercase text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
              {event.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-bclub-slate/25 bg-bclub-dark/60 p-4 rounded-xs text-xs font-mono">
            <div>
              <span className="text-bclub-slate uppercase block text-[10px]">SCHEDULE</span>
              <p className="text-white font-semibold mt-0.5">{dateFormatted}</p>
              {event.time && <p className="text-bclub-ice/70 text-[11px]">{event.time}</p>}
            </div>

            <div>
              <span className="text-bclub-slate uppercase block text-[10px]">VENUE LOCATION</span>
              <p className="text-white font-semibold mt-0.5">{event.venue}</p>
            </div>

            {event.registrationDeadline && (
              <div>
                <span className="text-bclub-slate uppercase block text-[10px]">REGISTRATION DEADLINE</span>
                <p className="text-amber-400 font-semibold mt-0.5">{event.registrationDeadline}</p>
              </div>
            )}

            {event.poc && (
              <div>
                <span className="text-bclub-slate uppercase block text-[10px]">COORDINATOR / POC</span>
                <p className="text-white font-semibold mt-0.5">{event.poc}</p>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <h4 className="font-mono text-xs text-bclub-teal uppercase tracking-widest font-bold">
              BRIEFING & OVERVIEW
            </h4>
            <p className="font-sans text-sm text-bclub-ice/80 leading-relaxed whitespace-pre-line">
              {event.description}
            </p>
          </div>

          <div className="pt-4 border-t border-bclub-slate/30 flex flex-wrap items-center gap-4">
            {event.href && (
              <Link
                href={event.href}
                className="px-5 py-2.5 bg-bclub-teal hover:bg-bclub-cyan text-bclub-dark font-display uppercase font-extrabold text-sm tracking-wider transition-all shadow-[0_0_15px_rgba(55,183,195,0.4)] flex items-center gap-2"
              >
                <span>ENTER EVENT PORTAL</span>
                <span>↗</span>
              </Link>
            )}

            {event.registrationLink && (
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white hover:bg-gray-100 text-bclub-dark font-display uppercase font-extrabold text-sm tracking-wider transition-all flex items-center gap-2 shadow-sm"
              >
                <span>REGISTER NOW</span>
                <span>↗</span>
              </a>
            )}

            {event.whatsappLink && (
              <a
                href={event.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 font-mono uppercase text-xs tracking-wider transition-all flex items-center gap-2"
              >
                <span>JOIN WHATSAPP GROUP</span>
                <span>↗</span>
              </a>
            )}

            {!isUpcoming && !event.href && (
              <span className="font-mono text-xs text-bclub-slate/80 uppercase">
                OPERATION CONCLUDED • ARCHIVED
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}