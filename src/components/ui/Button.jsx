export default function Button({ children, variant = 'primary', as: Tag = 'button', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium ' +
    'transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-azul-400 ' +
    'focus-visible:ring-offset-2 disabled:opacity-50';

  const variants = {
    primary: 'bg-azul-500 text-white hover:bg-azul-600 shadow-soft hover:shadow-lift',
    outline: 'border border-azul-500/40 text-azul-600 hover:bg-azul-50',
    ghost:   'text-azul-600 hover:text-azul-700 hover:bg-azul-50',
    sand:    'bg-sand text-azul-700 hover:bg-white',
  };

  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
