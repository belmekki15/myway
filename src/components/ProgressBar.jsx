export default function ProgressBar({ value }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-mist" role="progressbar" aria-valuenow={Math.round(value * 100)} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full bg-cobalt transition-[width] duration-500" style={{ width: `${value * 100}%` }} />
    </div>
  );
}
