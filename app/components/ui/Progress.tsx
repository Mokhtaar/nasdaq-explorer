interface ProgressProps {
  countdown: number;
  progress: number;
}

export default function Progress({ countdown, progress }: ProgressProps) {
  return (
    <div className="w-full mb-6">
      <p className="text-center mb-2">Retrying in {countdown} seconds...</p>
      <div className="h-2 w-64 mx-auto bg-gray-700 mt-5 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-1000 ease-linear"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}
